import { useMutation, useQuery } from "@tanstack/react-query";
import { getCategory, getClient, getDepartment, getIntegrityEngineer } from "../../services";
import { getCities, getCountries, getStates } from "../../services/common.service";

const useAddWorkHook = () => {
    const refetchOnWindowFocus = false
  return {
    category: useQuery({ queryKey: ["fetchprojectCategory"], queryFn: getCategory ,refetchOnWindowFocus}),
    department:useQuery({ queryKey: ["fetchdepartment"], queryFn: getDepartment,refetchOnWindowFocus }),
    client:useQuery({ queryKey: ["fetchclient"], queryFn: getClient,refetchOnWindowFocus }),
    integrityEngineer:useQuery({ queryKey: ["fetchintegrityEngineer"], queryFn: getIntegrityEngineer,refetchOnWindowFocus }),
    country:useQuery({ queryKey: ["fetchallcountry"], queryFn: getCountries,refetchOnWindowFocus }),
    state:useMutation({mutationFn:getStates}),
    city:useMutation({mutationFn:getCities})
  };
};

export default useAddWorkHook
