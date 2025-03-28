// import { getUserAccounts } from "@/actions/dashboard";
// import { defaultCategories } from "@/data/categorie";
// import { AddTransactionForm } from "../_components/transactionForm";
// import { getTransaction } from "@/actions/transaction";

// const AddTransactionPage = async ({ searchParams }) => {
//   const accounts = await getUserAccounts();
//   const editId = searchParams?.edit;

//   let initialData = null;
//   if (editId) {
//     const transaction = await getTransaction(editId);
//     initialData = transaction;
//   }

//   return (
//     <div className="max-w-3xl mx-auto px-5">
//       <div className="flex justify-center md:justify-normal mb-8">
//         <h1 className="text-5xl gradient-title ">
//           {editId ? "Edit" : "Add"} Transaction
//         </h1>
//       </div>
//       <AddTransactionForm
//         accounts={accounts}
//         categories={defaultCategories}
//         editMode={!!editId}
//         initialData={initialData}
//       />
//     </div>
//   );
// };

// export default AddTransactionPage;
import { getUserAccounts } from "@/actions/dashboard";
import { defaultCategories } from "@/data/categorie";
import { AddTransactionForm } from "../_components/transactionForm";
import { getTransaction } from "@/actions/transaction";

const AddTransactionPage = async ({ searchParams }) => {
  const editId = searchParams?.edit;

  const accountsPromise = getUserAccounts();
  const transactionPromise = editId
    ? getTransaction(editId)
    : Promise.resolve(null);

  const [accounts, initialData] = await Promise.all([
    accountsPromise,
    transactionPromise,
  ]);

  return (
    <div className="max-w-3xl mx-auto px-5">
      <div className="flex justify-center md:justify-normal mb-8">
        <h1 className="text-5xl gradient-title ">
          {editId ? "Edit" : "Add"} Transaction
        </h1>
      </div>
      <AddTransactionForm
        accounts={accounts}
        categories={defaultCategories}
        editMode={!!editId}
        initialData={initialData}
      />
    </div>
  );
};

export default AddTransactionPage;
