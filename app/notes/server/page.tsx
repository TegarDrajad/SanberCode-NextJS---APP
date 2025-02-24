import CreateForm from "./create"

async function getNotes() {
    const notes = await fetch('https://service.pace-unv.cloud/api/notes').then(
        (res) => res.json(),
    )

    return notes
}

export default async function Notes() {
    const notes = await getNotes()

    return(
        <>
            <CreateForm/>

            <div className="grid grid-cols-4 gap-4 mt-4">
            {notes.data.map((el: { id: string; title: string; description: string }) => (
                <div key={el.id} className="bg-blue-300 p-1 rounded-xl">
                    <h1>{el.title}</h1>
                    <p>{el.description}</p>
                </div>
            ),
            )}
            </div>
        </>
    )
}