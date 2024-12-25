import { Toaster } from "react-hot-toast";

export function ToasterContainer() {
  return (
    <Toaster
      position="bottom-right"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        duration: 3000,
        style: {
          fontSize: "12px",
          fontWeight: 500,
          background: "#0F171A",
          color: "#FFFFFF",
        },

        success: {
          iconTheme: {
            primary: "#39D97C",
            secondary: "#141E22",
          },
        },
        error: {
          iconTheme: {
            primary: "#D94338",
            secondary: "#141E22",
          },
        },
      }}
    />
  );
}
