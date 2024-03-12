export const actions = {
    default: async ({ request }) => {
      const formData = await request.formData();
      const name = formData.get('name');
      // Process the form data and perform actions
      return { success: true };
    },
  };