import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CakesCatalogsEntity } from "@/db-types";

interface CatalogsSelectProps {
  data?: CakesCatalogsEntity[] | null;
}

export const CakeCatalogsSelector: React.FunctionComponent<
  CatalogsSelectProps
> = ({ data }) => {
  return (
    <Select name='catalogId'>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Select option' />
      </SelectTrigger>
      <SelectContent>
        {data?.map(({ id, title }) => (
          <SelectItem key={`sel-col-${id}`} value={title}>
            {title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
