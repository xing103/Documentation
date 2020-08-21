Docs:
    学习的最佳方式：把重要的知识点归纳并集中在一起，集中复习，省去大量时间去查找相关资料
    web: https://www.npmjs.com/package/formik


Sample:
    Step 1: // install formik
        npm i formik

    Step 2: // import formik
        import { Formik } from 'formik'
        
    Step 3: // create a formik form
        <Formik 
            initialValues={{title: '', body: '', rating: ''}}
            onSubmit={(values, actions)=> {
                console.log(values);
                actions.resetForm();
            }}
        >
            {(props)=> (
                <View>
                    <TextInput 
                        style={globalStyles.input}
                        placeholder='Review title'
                        onChangeText={props.handleChange('title')}
                        value={props.values.title}
                    />
                    
                    <TextInput 
                        nultiline
                        style={globalStyles.input}
                        placeholder='Review body'
                        onChangeText={props.handleChange('body')}
                        value={props.values.body}
                    />
                    
                    <TextInput 
                        style={globalStyles.input}
                        placeholder='Rating (1-5)'
                        onChangeText={props.handleChange('rating')}
                        value={props.values.rating}
                        keyboardType='numeric'
                    />
                    
                    <Button title='submit' color='black' onPress={props.handleSubmit} />
                </View>
            )}
        </Formik>
    
    Step 4: // add some styles to input
        input: {
            
        }
        
