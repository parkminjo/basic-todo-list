import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useToastStore } from '../store/useToastStore';

const Toaster = () => {
  const { toasts } = useToastStore();
  const [parent] = useAutoAnimate();

  return (
    <ul ref={parent} className="fixed top-4 right-4 z-40 min-w-60">
      {toasts.map((toast) => {
        return (
          <li
            key={toast.id}
            className="bg-white rounded-lg shadow-md p-4 mb-3 text-center"
          >
            {toast.message}
          </li>
        );
      })}
    </ul>
  );
};

export default Toaster;
