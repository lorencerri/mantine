(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7605],{1570:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/create-form-context",function(){return r(27173)}])},27173:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return u}});var o=r(24246),t=r(71670),m=r(3916),s=r(30289);let i=(0,m.A)(s.us.createFormContext);function a(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"createFormContext"})," function creates context provider and hook to get form object from context:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { createFormContext } from '@mantine/form';\nimport { TextInput } from '@mantine/core';\n\n// Definition of form values is required\ninterface FormValues {\n  age: number;\n  name: string;\n}\n\n// createFormContext returns a tuple with 3 items:\n// FormProvider is a component that sets form context\n// useFormContext hook return form object that was previously set in FormProvider\n// useForm hook works the same way as useForm exported from the package but has predefined type\nconst [FormProvider, useFormContext, useForm] =\n  createFormContext<FormValues>();\n\nfunction ContextField() {\n  const form = useFormContext();\n  return (\n    <TextInput label=\"Your name\" {...form.getInputProps('name')} />\n  );\n}\n\nexport function Context() {\n  // Create form as described in use-form documentation\n  const form = useForm({\n    initialValues: {\n      age: 0,\n      name: '',\n    },\n  });\n\n  // Wrap your form with FormProvider\n  return (\n    <FormProvider form={form}>\n      <form onSubmit={form.onSubmit(() => {})}>\n        <ContextField />\n      </form>\n    </FormProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"store-context-in-separate-file",children:"Store context in separate file"}),"\n",(0,o.jsx)(n.p,{children:"Usually it is a good idea to store form context in separate file to avoid dependencies cycle:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"// form-context.ts file\nimport { createFormContext } from '@mantine/form';\n\ninterface UserFormValues {\n  age: number;\n  name: string;\n}\n\n// You can give context variables any name\nexport const [UserFormProvider, useUserFormContext, useUserForm] =\n  createFormContext<UserFormValues>();\n"})}),"\n",(0,o.jsx)(n.p,{children:"Then you can import context variables from anywhere:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"// NameInput.tsx\nimport { TextInput } from '@mantine/core';\nimport { useUserFormContext } from './form-context';\n\nexport function NameInput() {\n  const form = useUserFormContext();\n  return <TextInput label=\"Name\" {...form.getInputProps('name')} />;\n}\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"// UserForm.tsx\nimport { NumberInput } from '@mantine/core';\nimport { UserFormProvider, useUserForm } from './form-context';\nimport { NameInput } from './NameInput';\n\nfunction UserForm() {\n  const form = useUserForm({\n    initialValues: {\n      age: 0,\n      name: '',\n    },\n  });\n\n  return (\n    <UserFormProvider form={form}>\n      <form onSubmit={form.onSubmit(() => {})}>\n        <NumberInput label=\"Age\" {...form.getInputProps('age')} />\n        <NameInput />\n      </form>\n    </UserFormProvider>\n  );\n}\n"})})]})}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(i,{...e,children:(0,o.jsx)(a,{...e})})}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=1570)}),_N_E=e.O()}]);