import { Box } from "@mui/material"
import { getStaticProps } from ".";
// import { useRouter } from "next/router"

export default function DetailTree ( {idtest = null} ){
    const router = 'useRouter()';
    const id = 'router.query.id';

    return (
        <div>
            {console.log(router)}
            <Box>
                <h1>
                    <b>Lấy bằng useRouter:</b> {id}
                </h1>
                <h2>
                    <b>Lấy bằng getStaticProps:</b> {idtest}
                  
                </h2>
                
            </Box>          

        </div>
    )
} 


export async function getServerSideProps(context) {
    const { id } = context.query;
  
    // ... lấy dữ liệu sử dụng id...
  
    return {
      props: {
        idtest: id
      }
    };
  }

