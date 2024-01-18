import React from "react";
import EgitimlerItem from "../components/EgitimlerItem";
import EgitimSingle from "../components/EgitimSingle";
import Form from "../components/Form";
import MainLayout from "../layouts/MainLayout";

const HomePage = () =>{
    return(
        <React.Fragment>
          <MainLayout>

           <Form/>
           <br/>
           <EgitimSingle/>
          </MainLayout>
          

        </React.Fragment>
       
    )
}
export default HomePage