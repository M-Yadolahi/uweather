import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
  let name = "خوش آمدید"
  console.log(props.data)

  return (
    <div style={{ direction: "ltr", minHeight: "11vh" }}>
      <br-x />
      <Window title={name} style={{ minHeight: 200, margin: 10, width: "calc(100% - 20px)",backgroundImage:'url("https://irmapserver.ir/research/33/cloud2.jpg")',backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>
        {/* <pre style={{ direction: "ltr" }}>{JSON.stringify(props, null, 2)}</pre> */}


        {/* <f-cse style={{height:300}}>
          
          <img src="https://irmapserver.ir/research/33/ist.jpg" alt="" style={{height:100,objectFit:"contain"}} />
          <img src="https://irmapserver.ir/research/33/ist.jpg" alt="" style={{height:100,objectFit:"contain"}} />
        </f-cse> */}

        <c-x>
          <f-cc style={{padding:"20px", color:"white"}}><f-24>weather</f-24></f-cc>

          <f-cse>
            <c-c style={{backgroundColor:"rgba(171 170 170 / 0.5)",borderRadius:5,width:170,height:200,padding:"50px 0px",border:"solid 1.5px"}}>
              <f-c>
                <img style={{width:40,height:40}} src="https://irmapserver.ir/research/33/temp_prev_ui.png" alt="" />
                <p style={{fontSize:28}}>{props.CuCo[0].temp_C}<span style={{fontSize:16}}>°C</span></p>
              </f-c>
              <br-x></br-x>
              <br-x></br-x>
              <f-18>temp in celsius</f-18>
            </c-c>
            <c-c style={{backgroundColor:"rgba(171 170 170 / 0.5)",borderRadius:5,width:170,height:200,padding:"50px 0px",border:"solid 1.5px"}}>
              <f-c>
                <img style={{width:40,height:40}} src="https://irmapserver.ir/research/33/temp_prev_ui.png" alt="" />
                <p style={{fontSize:28}}>{props.CuCo[0].temp_F}<span style={{fontSize:16}}>°F</span></p>
              </f-c>
              <br-x></br-x>
              <br-x></br-x>
              <f-18>temp in fahrenheit</f-18>
            </c-c>
          </f-cse>

          <f-cc style={{margin:50,color:"white"}}>
            Rutherford team
          </f-cc>


        </c-x>

       



      </Window>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

    let res = await fetch("http://irmapserver.ir/research/api/weather/");
    let data = await res.json();
    let CuCo = data.current_condition;
    let NArea = data.nearest_area;
    let Dat = data.weather
  return {
    props: {
      data: global.QSON.stringify({
        CuCo,
        NArea,
        Dat,
        session,
        // nlangs,
      })
    },
  }
}