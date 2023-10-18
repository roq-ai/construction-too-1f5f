import * as yup from 'yup';

export const rentalValidationSchema = yup.object().shape({
  start_date: yup.date().nullable(),
  end_date: yup.date().nullable(),
  total_price: yup.number().integer().nullable(),
  status: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  tool_id: yup.string().nullable().required(),
});
