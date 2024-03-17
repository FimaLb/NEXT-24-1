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
  defaultValue?: SizesEntityOrWheightsEntity["id"];
}

export const CakeWheightsSelector: React.FunctionComponent<
  WheightsSelectProps
> = ({ data, defaultValue }) => {
  return (
    <Select name='wheightId' defaultValue={defaultValue}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Select option' />
      </SelectTrigger>
      <SelectContent>
        {data?.map(({ id, value }) => (
          <SelectItem key={`sel-col-${id}`} value={id}>
            {value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
