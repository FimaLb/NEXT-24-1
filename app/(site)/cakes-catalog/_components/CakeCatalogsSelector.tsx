import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CatalogsEntity } from "@/db-types";

interface CatalogsSelectProps {
  data?: CatalogsEntity[] | null;
  defaultValue?: string;
}

export const CakeCatalogsSelector: React.FunctionComponent<
  CatalogsSelectProps
> = ({ data, defaultValue }) => {
  return (
    <Select name='catalogId' defaultValue={defaultValue}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Select option' />
      </SelectTrigger>
      <SelectContent>
        {data?.map(({ id, title }) => (
          <SelectItem key={`sel-col-${id}`} value={id}>
            {title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
