import React, { memo, useEffect, useCallback, useMemo } from 'react';
import {useSearchParams} from "umi"
import {PageContainer} from "@ant-design/pro-components"
export default memo(() => {
    let [SearchParams,setSearchParams] = useSearchParams()
    useEffect(()=>{
        console.log(SearchParams.get('id'))
    },[])
    return <PageContainer>
        <p>2423423423</p>
    </PageContainer>
});