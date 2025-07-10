// import { useToastStore } from '../store/useToastStore';

const Toaster = () => {
  // const { toasts } = useToastStore();

  const toasts = [
    {
      id: '11',
      message: 'This is a toast message',
    },
  ];

  return (
    <ul className="fixed top-4 left-1/2 z-40 -translate-x-1/2">
      {toasts.map((toast) => {
        return (
          <li key={toast.id} className="bg-white rounded-lg shadow-md p-4">
            {toast.message}
          </li>
        );
      })}
    </ul>
  );
};

export default Toaster;
