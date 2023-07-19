import {useNavigate} from "umi"
import {PageContainer} from "@ant-design/pro-components"
const DocsPage = () => {
  let to = useNavigate()
  return (
    <PageContainer>
       <div>
        <p onClick={()=>{
          to('/docs/docschildren?id=30303')
        }}>This is umi docs.
      </p>
    </div>
    </PageContainer>
  );
};

export default DocsPage;
