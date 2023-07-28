import { Button, Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { DownOutlined } from "@ant-design/icons";
const RootLayout = ({ children }) => {
    const categories = [
        { name: "CPU / Processor", link: "/category/cpu" },
        { name: "Motherboard", link: "/category/motherboard" },
        { name: "RAM", link: "/category/ram" },
        { name: "Power Supply Unit", link: "/category/psu" },
        { name: "Storage Device", link: "/category/storage" },
        { name: "Monitor", link: "/category/monitor" },
        { name: "Others", link: "/category/others" },
    ];
    return (
        <Layout>
            <Header
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <div className="brand-logo">
                    <h1>
                        <Link
                            href="/"
                            style={{
                                color: "white",
                                padding: "5px 10px",
                                borderRadius: "3px",
                            }}
                        >
                            PC BUILDER BANGLADESH
                        </Link>
                    </h1>
                </div>
                <Menu theme="dark" mode="vertical" className={styles.menu_items}>
                    <Menu.SubMenu key="category" title="Category">
                        {categories.map((category) => (
                            <Menu.Item key={category.name}>
                                <Link href={category.link}>{category.name}</Link>
                            </Menu.Item>
                        ))}
                    </Menu.SubMenu>
                    <Menu.Item key="pcBuilderButton">
                        <Link href="/pcBuilder">
                            <Button type="primary">PC Builder</Button>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Header>

            <Content
                style={{
                    padding: "0 24px",
                    minHeight: "100vh",
                }}
            >
                {children}
            </Content>

            <Footer
                style={{
                    textAlign: "center",
                }}
            >
                <div className={styles.line}></div>
                <h2
                    style={{
                        fontSize: "28px",
                    }}
                >
                    PC BUILDER BANGLADESH
                </h2>
                PC BUILDER BANGLADESH ©2023 Created by Shihab Ahmed Efty
            </Footer>
        </Layout>
    );
};
export default RootLayout;
