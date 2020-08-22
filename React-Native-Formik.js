/* 
    Docs:
        学习的最佳方式：把重要的知识点归纳并集中在一起，集中复习，省去大量时间去查找相关资料
        web: https://www.npmjs.com/package/formik

    Steps:
        Step 1: npm i formik
        
        Step 2: import { Formik } from 'formik'
        
        Step 3: create a formik form
        
        Step 4: add some styles to input
        input: {
            
        }
*/
<Formik 
    // 初始化数据
    initialValues={{title: '', body: '', rating: ''}}
    // 当用户提交数据时
    onSubmit={(values, actions)=> {
        // values 修改后的数据
        // actions formik提供的对象，包含的一些方法 
        console.log(values);
        // 重置数据
        actions.resetForm();
    }}
>
    {/* props对象，包含了一堆方法和属性供使用 */}
    {(props)=> (
        <View>
            <TextInput 
                style={globalStyles.input}
                placeholder='Review title'
                // 更新title
                onChangeText={props.handleChange('title')}
                value={props.values.title}
            />
            
            <TextInput 
                multiline
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
                // 使用数字键盘
                keyboardType='numeric'
            />
            
            <Button title='submit' color='black' onPress={props.handleSubmit} />
        </View>
    )}
</Formik>
    
        
