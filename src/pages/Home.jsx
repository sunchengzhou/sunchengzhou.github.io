// import { Header as Headers } from "./components/Header";
import { Layout, Row, Col } from "antd";
const { Header, Footer, Content } = Layout;
import "./home.scss";

export function Home() {
  return (
    <div style={{ width: "100%" }}>
      <Layout>
        <Header>Header</Header>
        <Content>
          <Row>
            <Col span={4}>
                <div style={{ width: '100%',padding: '40px', paddingTop: '100%', background: 'blue', margin: '15px' }}>
                    hello
                </div>
            </Col>
            <Col span={28}>col-18</Col>
          </Row>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}
