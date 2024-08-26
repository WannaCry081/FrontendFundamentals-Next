"use client";
import {
  useUpdateEmployeeQuery,
  useEmployeeQuery,
  useDestroyEmployeeQuery,
} from "@/hooks";
import { EmployeeForm } from "@/components/employee";
import { BackButton } from "@/components/shared";
import { EmployeeFormState } from "@/components/employee";

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  const id = params.id;

  const { data, isLoading, isError } = useEmployeeQuery(id);
  const { isUpdatePending, updateEmployee } = useUpdateEmployeeQuery(id);
  const { isDestroyPending, destroyEmployee } = useDestroyEmployeeQuery(id);

  if (isLoading) {
    return <EmployeeFormState.LoadingState />;
  }

  if (isError) {
    return <EmployeeFormState.ErrorState />;
  }

  if (!data) {
    return <EmployeeFormState.NotFoundState />;
  }

  return (
    <article>
      <section className="my-4">
        <BackButton />
      </section>

      <section className="mb-4">
        <h1 className="text-2xl font-bold text-indigo-500">
          Edt Employee Detail
        </h1>
      </section>

      <EmployeeForm
        isPending={isUpdatePending || isDestroyPending}
        initialData={data}
        onSubmit={updateEmployee}
        onDelete={destroyEmployee}
      />
    </article>
  );
}
