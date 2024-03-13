import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SizesEntityOrWheightsEntity } from "@/db-types";

interface SizesSelectProps {
  data?: SizesEntityOrWheightsEntity[] | null;
}

export const CakeSizeSelector: React.FunctionComponent<SizesSelectProps> = ({
  data,
}) => {
  return (
    <Select name='sizeId'>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Select option' />
      </SelectTrigger>
      <SelectContent>
        {data?.map(({ id, value }) => (
          <SelectItem key={`sel-col-${id}`} value={value}>
            {value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
