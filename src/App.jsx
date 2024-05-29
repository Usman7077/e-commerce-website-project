import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import CartProvider from "./context/CartProvider.jsx";
import Home from "./pages/home/Home.jsx";
import Content from "./pages/shop/Shop.jsx";
import Product from "./ui/Product.jsx";
import AppLayout from "./ui/AppLayout.jsx";
import Cart from "./pages/Cart.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export default function App() {
  return (
    <CartProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate to="home" replace />} />
              <Route path="home" element={<Home />} />
              <Route path="shop" element={<Content />} />
              <Route path="product/:sku" element={<Product />} />
              <Route path="cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </CartProvider>
  );
}

// <QueryClientProvider client={queryClient}>
//   <Header />
//   <Outlet />
// </QueryClientProvider>

// export const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/shop",
//         element: <Content />,
//       },
//       {
//         path: "/product/:sku",
//         element: <Product />,
//       },
//     ],
//   },
// ]);
