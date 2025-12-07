
import { useRouter } from "vue-router";


function useNavigateBack() 
{
  const router = useRouter();
  
  const goToPreviousPage = () =>
  {
    router.go(-1);
  }

   return { goToPreviousPage}
}

export default useNavigateBack;