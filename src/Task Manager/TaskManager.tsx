import { useMemo, useState } from "react"

const TaskManager = () => {

  const [list, setList] = useState([
    {id: 1, task: 'do laundry', completed: false},
    {id: 2, task: 'go to work', completed: false},
    {id: 3, task: 'have dinner', completed: false},
    {id: 4, task: 'work harder', completed: false},
    {id: 5, task: 'get hired', completed: false}
  ])


  const [completedList, setCompletedList] = useState<typeof list>([])

  const handleCompletion = ({id, action} : {id: number, action: string}) => {
    if(action === 'transferList') {
      const updatedList = list.map(task => {
        if(task.id === id) {
          return {...task, completed: !task.completed}
        }
        return task
      })
      setList(updatedList)
    } else {
      const updatedList = completedList.map(task => {
        if(task.id === id) {
          return {...task, completed: !task.completed}
        }
        return task
      })
      setCompletedList(updatedList)
    }
   
  }

  const trasferToCompletedList = () => {
    const hasCompletedList = list.filter(task => task.completed === true)
    setList(prev => prev.filter(list => list.completed === false))
    setCompletedList((prev) => [...prev, ...hasCompletedList])
  }
  
  const transferBackToList = () => {
    const listToBeComplete = completedList.filter(task => task.completed === false)
    setList(prev => [...prev, ...listToBeComplete])
    setCompletedList(prev => prev.filter(list => list.completed === true))
  }
  

  const isTransferBtnOn = useMemo(() => {
      return list.some(task => task.completed)
  }, [list])

  const isTransferBackBtnOn = useMemo(()=> {
    return completedList.some(task => !task.completed)

  }, [completedList])


  return (
    <div className="h-screen grid place-content-center">
      <div className="flex gap-10">
        <div className="min-h-[250px]">
          <h2 className="mb-5 text-2xl font-semibold text-center underline">Todo List</h2>
          {
            list.map(task => (
              <div key={task.id} className="flex gap-2">
                <input type="checkbox" checked={task.completed} onChange={() => handleCompletion({id: task.id, action: 'transferList'})} />
                <p>{task.task}</p>
              </div>
            ))
          }
        </div>
        <div className="px-5 bg-gray-300 grid place-content-center">
          <button
            onClick={trasferToCompletedList}
            className={`text-2xl cursor-pointer disabled:opacity-20`}
            disabled={!isTransferBtnOn}
          >
            ➡️
          </button>
          <button
            onClick={transferBackToList}
            className={`text-2xl cursor-pointer disabled:opacity-20`}
            disabled={!isTransferBackBtnOn}
          >
            ⬅️
          </button>
        </div>
        <div>
        <h2 className="mb-5 text-2xl font-semibold text-center underline">Completed</h2>
          {
            completedList.length > 0 && (
              completedList.map(task => (
                <div key={task.id} className="flex gap-2">
                  <input type="checkbox" checked={!task.completed} onChange={()=> handleCompletion({id: task.id, action: 'transferListBack'})} />
                  <p>{task.task}</p>
                </div>
              ))
            )
          }
        </div>
      </div>
    </div>
  )
}

export default TaskManager;
