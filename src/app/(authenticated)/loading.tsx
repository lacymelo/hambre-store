import { Skeleton } from "@/components/skeleton";
import { BoxLoading, SimpleGrid } from "./styles";

export default function AuthLoading() {
    return (
        <BoxLoading>
            <SimpleGrid>
                <Skeleton sizeColumn={14} sizeRow={1} />
                <Skeleton sizeColumn={1} sizeRow={1} />
                <Skeleton sizeColumn={4} sizeRow={2} />
                <Skeleton sizeColumn={9} sizeRow={1} />
                <Skeleton sizeColumn={1} sizeRow={1} />
                <Skeleton sizeColumn={9} sizeRow={7} />
                <Skeleton sizeColumn={1} sizeRow={1} />
                <Skeleton sizeColumn={4} sizeRow={6} />
                {
                    Array.from({ length: 5 }, (_, i) => i + 1).map(step => {
                        return (
                            <Skeleton key={step} sizeColumn={1} sizeRow={1} />
                        )
                    })
                }
            </SimpleGrid>
        </BoxLoading>
    )
}