import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SizesEntityOrWheightsEntity } from "@/db-types";

interface WheightsSelectProps {
  data?: SizesEntityOrWheightsEntity[] | null;
}

export const CakeWheightsSelector: React.FunctionComponent<
  WheightsSelectProps
> = ({ data }) => {
  return (
    <Select name='wheightId'>
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
