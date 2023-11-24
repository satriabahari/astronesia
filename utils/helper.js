export const handleUpdate = async (table, data, redirect, event) => {
  event.preventDefault();
  setIsMutating(true);
  try {
    await updateData(table, data);
    toast.success("Data update successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
    setIsMutating(false);
    setTimeout(() => {
      router.push(redirect);
      router.refresh();
    }, 2000);
  } catch (error) {
    toast.error("Error adding data", {
      position: toast.POSITION.TOP_CENTER,
    });
    setIsMutating(false);
  }
};
