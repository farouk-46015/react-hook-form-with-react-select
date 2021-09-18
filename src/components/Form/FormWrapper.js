import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function FormWrapper({
  defaultValues,
  children,
  onSubmit,
  watchFields,
}) {
  const methods = useForm({ defaultValues });

  const { handleSubmit, control, watch, getValues, formState, unregister } =
    methods;

  useEffect(() => {
    const values = getValues();
    watchFields({ values });
  }, []);

  useEffect(() => {
    const subscription = watch((values, { name, type }) => {
      watchFields({ values, name, type });
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-5">
      {React.Children.map(children, (child) => {
        const name = child.props.name;
        const isVisible =
          'isVisible' in child.props ? child.props.isVisible : true;
        const error =
          isVisible && formState.errors[name]
            ? formState.errors[name]
            : undefined;

        return name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                control,
                error,
                unregister,
                key: name,
              },
            })
          : child;
      })}
    </form>
  );
}
