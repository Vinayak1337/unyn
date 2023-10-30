import { toast } from 'react-toastify';

export const promiseToast = (
	id: string,
	message: string,
	status: 'pending' | 'resolved' | 'rejected' = 'pending'
) => {
	const promise = new Promise((resolve, reject) => {
		switch (status) {
			case 'pending':
				break;

			case 'resolved':
				resolve(null);
				break;

			case 'rejected':
				reject(null);
				break;
		}
	});

	toast.promise(
		promise,
		{
			pending: message,
			success: message,
			error: message
		},
		{
			toastId: id,
			autoClose: status === 'resolved' ? 1 : 0
		}
	);
};
