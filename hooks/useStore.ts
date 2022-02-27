import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { StoreState, StoreDispatch } from "@/utils/store";

export const useStoreDispatch = () => useDispatch<StoreDispatch>();
export const useStoreSelector: TypedUseSelectorHook<StoreState> = useSelector;
