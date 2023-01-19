json.extract! greeting, :id, :messages, :created_at, :updated_at
json.url greeting_url(greeting, format: :json)
