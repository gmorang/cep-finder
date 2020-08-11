import api from '../../services/api';

export const getZip = async (_, { input }) => {
  const zip = await api.get(`ws/${input.zip}/json/`).then(res => res.data);

  return zip;
}
