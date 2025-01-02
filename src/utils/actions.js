"use server";
import { revalidateTag } from "next/cache";
import { v4 as uuid } from "uuid";

export async function getData(url, tags = []) {
  const res = await fetch(url, { next: { tags } });
  const data = await res.json();
  return data;
}


export  async function postData(url, data) {
  try {
    await fetch(url, { method: "POST", body: JSON.stringify(data) });
  revalidateTag("users")
  } catch (error) {
    throw error
  }
}


export  async function patchData(url, data) {
  try {
    await fetch(`${url}/${id}`,{ method: "PATCH", body: JSON.stringify(data) });
  revalidateTag("users")
  } catch (error) {
    throw error
  }
}

export  async function deleteData(url, data) {
  try {
    await fetch(`${url}/${id}`,{ method: "DELETE" });
  revalidateTag("users")
  } catch (error) {
    throw error
  }
}