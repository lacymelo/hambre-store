'use client'
import { useState } from "react";
import { Column } from "../../styles";
import { Select } from "@labex-hambre-ui/react";
import { incomePeriod } from "@/utils/data";
import ReactEcharts from "echarts-for-react";

export function IncomePeriod() {
    const [filter, setFilter] = useState('')
    const values = [120, 232, 101, 234, 30, 434, 190]

    const options = {
        color: ['#FFCD42'],
        xAxis: {
            type: 'category',
            data: ['01/02', '02/02', '03/02', '04/02', '05/02', '06/02', '07/02']
        },
        tooltip: {
            trigger: 'axis'
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: values,
                type: 'line',
                smooth: true
            }
        ]
    }

    function handlerFilter(value: string) {
        console.log(value)
        setFilter(value)
    }

    return (
        <Column>
            <Select
                placeholder="selecione o período"
                name="filter"
                items={incomePeriod}
                value={filter}
                onValueChange={(selectedValue) => handlerFilter(selectedValue)}
            />

            <ReactEcharts
                option={options}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                }}
            />
        </Column>
    )
}