import './App.css';
import React,{ useState }from 'react';
import MapItem from "./MapItem";

import { FileOutlined, PieChartOutlined, UserOutlined,TeamOutlined,DesktopOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import MapEditor from "./components/mapedit";
const { Header, Content, Footer, Sider } = Layout;

export default class App extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            select:false,
            collapsed:false
        }
    }


    render() {

        return(
            <Layout
                style={{
                    minHeight: '100vh',
                    height:"100vh"
                }}
            >
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={(value) => this.setState({collapsed:value})}>
                    <div
                        style={{
                            height: 32,
                            margin: 16,
                            background: 'rgba(255, 255, 255, 0.2)',
                        }}
                    >
                        123
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={
                        [
                            {label:'Option 1', key:'1',icon: <PieChartOutlined />},
                            {label:'Option 2', key:'2',icon: <DesktopOutlined />},
                            {label:'User', key:'sub1',icon: <UserOutlined />,
                                children:[
                                    {label:'Tom', key:'3'},
                                    {label:'Tom', key:'4'},
                                    {label:'Tom', key:'5'}
                                ]}
                        ]
                    } />
                </Sider>
                <Layout className="site-layout" >
                    <Header style={{padding: 0,color:"#ffffff"}}>
                        地图编辑器
                    </Header>
                    <Content style={{justifyContent:"center",display:"flex",maxHeight:"100%",maxWidth:"100%"}}>
                        <div style={{padding: 24, minHeight: 360,flex:1 ,overflow: "auto"}}>
                            <MapEditor />
                        </div>
                    </Content>

                </Layout>
            </Layout>

        )
    }
}

