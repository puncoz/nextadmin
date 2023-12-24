"use client"
import React, { FunctionComponent } from "react"
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import chartData from "./chart-data"
import styles from "./chart.module.css"


type Props = {};

const Chart: FunctionComponent<Props> = (props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Recap</h2>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart width={500}
                   height={300}
                   data={chartData}
                   margin={{
                     top: 5,
                     right: 30,
                     left: 20,
                     bottom: 5,
                   }}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <Tooltip contentStyle={{ background: "#151c2c", border: "none" }}/>
          <Legend/>
          <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5"/>
          <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2"/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
