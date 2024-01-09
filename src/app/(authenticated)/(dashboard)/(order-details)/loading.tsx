import { Skeleton } from "@/components/skeleton";
import { BoxLoading, SimpleGrid } from "../../styles";

export default function OrderDetailsLoading() {
    return (
        <BoxLoading>
            <SimpleGrid>
                <Skeleton sizeColumn={7} sizeRow={2} />
                <Skeleton sizeColumn={7} sizeRow={2} />
                <Skeleton sizeColumn={14} sizeRow={4} />
                <Skeleton sizeColumn={14} sizeRow={1} />
            </SimpleGrid>
        </BoxLoading>
    )
}