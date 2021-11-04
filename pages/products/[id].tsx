import React, { FC } from "react";
import { Product } from "@prisma/client";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Image from "next/image";

import { IProductProps, IProductServerProps } from "../../types/pageInterfaces";
import prisma from "../../db";

import styles from "../../styles/pages/Product.module.scss";

/**
 * Fetches product from provided product id in query
 * @param { GetServerSidePropsContext } context - The context of the request
 * @return {Product | undefined} - The product respective to product id
 */
export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<IProductServerProps> => {
  const id = context.query.id; // Fetch product id from query

  // Fetch product from provided id
  const product: Product | null = await prisma.product.findUnique({
    where: { id: id as string },
  });

  return { props: { product } }; // Return product object
};

/**
 * Product page
 * @prop {Product | undefined} product - The product respective to product id
 * @return {JSX.Element} - The JSX code for product page
 */
const Product: FC<IProductProps> = ({ product }): JSX.Element => {
  return (
    <div className={styles.product}>
      {product && (
        <div className={styles.productCard}>
          <Image
            src={product.image}
            alt={product.name}
            width={100}
            height={130}
          />
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
      )}
    </div>
  );
};

export default Product;
