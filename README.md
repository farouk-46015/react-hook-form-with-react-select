# React Hook From with React Select

Simple example of how to use React Select with React Hook Form

#### Sample implementation

```javascript
<FormWrapper onSubmit={onSubmit} watchFields={handleWatch}>
  <SelectWrapper
    name="gender"
    label="Gender"
    rules={{
      required: { value: true, message: 'Gender is required' },
    }}
    value={{ label: 'Other', value: 'other' }}
    options={[
      { label: 'Female', value: 'female' },
      { label: 'Male', value: 'male' },
      { label: 'Other', value: 'other' },
    ]}
  />
  <SelectWrapper
    name="body"
    label="Body"
    rules={{
      required: { value: true, message: 'Body is required' },
    }}
    options={[
      { label: 'Fat ', value: 'fat' },
      { label: 'Medium', value: 'medium' },
      { label: 'Slim', value: 'slim' },
    ]}
  />
</FormWrapper>
```

Try it on CodeSandbox [React Hook From with React Select](#)
