interface ChildrenProps {
  children: React.ReactNode;
}

interface ParamPageProps {
  searchParams: Record<string, undefined | string>;
}

interface PageParamIdProps {
  params: {
    id: number;
  };
}
