import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

export const dateFormatter = (val: Date | string | undefined) => {
  if (val) {
    return dayjs(val).format('DD/MM/YYYY');
  } else {
    return dayjs(new Date()).format('DD/MM/YYYY');
  }
};
