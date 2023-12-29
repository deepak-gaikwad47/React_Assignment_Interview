import React, { useEffect, useState } from "react";
import Table from "../../component/VTable";
import Layout from "../../component/Layout";
import { Link } from "react-router-dom";
export default function Product() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const handleRowsPerPageChange = (newRowsPerPage) => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1);
  };

  const fetchProducts = async () => {
    try {
      const result = await fetch(
        "http://codetentacles-006-site36.htempurl.com/api/api/product-list",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: userInfo.token,
          },
        }
      );
      const data = await result.json();
      setProducts(data.data);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
      fetchProducts();
  }, [rowsPerPage]);

  const columns = [
    {
      title: "#",
      dataIndex: "productId",
      key: "productId",
    },
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Product Image",
      dataIndex: "productimg",
      key: "productimg",
      render: (item) => (
        <>
          <div className="m-auto flex justify-center">
            <img
              src="/assets/image/shirt.webp"
              alt="productimg"
              width="50px"
              height="50px"
              className="rounded"
            />
          </div>
        </>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "Price",
    },
  ];

  return (
    <>
      <Layout>
        <div className="bg-white p-4 mb-2 rounded-lg  dark:border-gray-700 mt-14">
          <div>
            <h3 class="!text-defaulttextcolor dark:!text-defaulttextcolor/70 dark:text-white text-left dark:hover:text-white text-[1.125rem] font-semibold">
              Product
            </h3>
          </div>
        </div>
        <div className="bg-white">
          <div className="p-4 rounded-lg dark:border-gray-700 ">
            <div className="flex justify-end mb-3 p-2">
              <Link
                to="/Add-product"
                className="rounded-lg px-4 py-2 bg-green-700 text-green-100 hover:bg-green-800 duration-300"
              >
                Add Product
              </Link>
            </div>
            <Table
              cols={columns}
              data={products}
              totalPages={Math.ceil(products.length / rowsPerPage)}
              page={currentPage}
              handlePageChange={handlePageChange}
              handleRowsPerPageChange={handleRowsPerPageChange}
              isTableLoading={!products.length}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
