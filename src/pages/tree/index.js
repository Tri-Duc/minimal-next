import MenuTree from "../../components/MenuTree";
import UserService from "../../services/UserService";
import { getCurriculumData } from "../../services/CurriculumService";

// const curriculum = getCurriculumData();

function TreePage({ list = null,curriculum=null }) {
  return (   
    <div>     
      
       {console.log(curriculum )}
       {console.log(list )}
      <h1>Sortable Tree Directory</h1>
        <MenuTree />

        { 
          list?.map((item, index)=>{
            return (
              <div key={index}>
                <p>
                  {item.name}
                </p>
              </div>
            )
          }) 
        }
       
    </div>
  );
}

export async function getStaticProps(){
  const curriculumData = await getCurriculumData();

  // console.log(curriculumData );

  // Gọi qua services lấy hàm getUsers 
  const { getUsers } = UserService();

  // Gán biến user bằng hàm getUsers (Đây là hàm trả về kết quả của data)
  const userList = await getUsers()
  // const curriculum =  getCurriculumData(); 



  return {
    props: {
      list: userList,
      curriculum: curriculumData,
        
    },
    revalidate: 10,
  }
}

export default TreePage;
