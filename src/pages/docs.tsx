import {history} from "umi"
const DocsPage = () => {
  return (
    <div>
      <p onClick={()=>{
        history.push('/docs/docschildren')
      }}>This is umi docs.
      </p>
    </div>
  );
};

export default DocsPage;
