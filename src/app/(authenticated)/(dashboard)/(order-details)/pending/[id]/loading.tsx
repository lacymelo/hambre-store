import { BoxLoading, SimpleGrid } from "@/app/(authenticated)/styles";
import { Skeleton } from "@/components/skeleton";

export default function PendingLoading() {
    return (
        <BoxLoading>
            <SimpleGrid>
                <Skeleton sizeColumn={14} sizeRow={1} />
                <Skeleton sizeColumn={14} sizeRow={6} />
                <Skeleton sizeColumn={14} sizeRow={9} />
            </SimpleGrid>
        </BoxLoading>
    )
}