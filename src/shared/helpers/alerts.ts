import Swal from "sweetalert2";

export const deleteAlert = (id: number, event?: (item: any) => void) => {
  Swal.fire({
    title: "¿Está seguro de eliminar?",
    text: "¡No podrás revertir esto!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "¡Sí, bórralo!",
  }).then((result) => {
    if (!result.isConfirmed) {
      return false;
    }
    if(event){
        event(id);
    }
  });
};

export const deleteSuccess = () => {
  Swal.fire("¡Eliminado!", "Eliminación exitosa", "success");
};
