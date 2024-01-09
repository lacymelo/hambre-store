import { BoxLoading, SimpleGrid } from "@/app/(authenticated)/styles";
import { Skeleton } from "@/components/skeleton";

export default function ConfirmedLoading() {
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