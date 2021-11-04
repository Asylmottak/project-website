import React, { FC } from "react";
import { Product } from "@prisma/client";
import { GetServerSideProps } from "next";

import {
  IProductsProps,
  IProductsServerProps,
} from "../../types/pageInterfaces";
import prisma from "../../db";

import styles from "../../styles/pages/Products.module.scss";

/**
 * Fetches products from backend on server side
 * @return {IServerSideProps} - Server side props fetching products
 */
export const getServerSideProps: GetServerSideProps =
  async (): Promise<IProductsServerProps> => {
    const products: Product[] = await prisma.product.findMany(); // Fetch products from prisma
    return { props: { products } }; // Return props with products
  };

/**
 * This is the home page.
 * @prop {Product[]} products - The products fetched from database
 * @return {JSX.Element} - The JSX code for home page
 */
const Products: FC<IProductsProps> = ({ products }): JSX.Element => {
  return (
    <div className={styles.products}>
      {products.map((product: Product, key: number) => {
        return (
          <div key={key}>
            <a href={`/products/${product.id}`}>{product.name}</a>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
