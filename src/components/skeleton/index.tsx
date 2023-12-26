import { HTMLAttributes } from "react";
import { SkeletonContent } from "./styles";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
    sizeColumn: number
    sizeRow: number
}

export function Skeleton({ sizeColumn, sizeRow, ...props }: SkeletonProps) {
    return (
        <SkeletonContent {...props}
            css={{
                '--size-column': sizeColumn,
                '--size-row': sizeRow
            }}
        />
    )
}