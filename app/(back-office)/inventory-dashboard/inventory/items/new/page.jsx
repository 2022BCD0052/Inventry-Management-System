import CreateItemForm from "@/components/dashboard/CreateItemForm";
import FormHeader from "@/components/dashboard/FormHeader";
import { getData } from "@/lib/getData";
export default async function NewItem() {
  // serial 
  const categoriesData = getData("categories")|| [];
  const unitsData = getData("units")|| [];
  const brandsData = getData("brands")|| [];
  const suppliersData = getData("suppliers")|| [];
  const warehousesData = getData(" warehouse")|| [];
  // parallel fetching

  const [categories, units, brands, suppliers, warehouses] = await Promise.all([
    categoriesData,
    unitsData,
    brandsData,

    suppliersData,
    warehousesData,
  ]);
  return (
    <div>
      <FormHeader title={"New Items"} href={"/inventory-dashboard/inventory"} />
      <CreateItemForm
        categories={categories}
        units={units}
        brands={brands}
        suppliers={suppliers}
        warehouses={warehouses}
      />
    </div>
  );
}
