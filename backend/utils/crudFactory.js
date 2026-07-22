const crudFactory = (Model) => {
  return {
    getAll: async (req, res) => {
      try {
        let query = Model.find();
        
        // Sorting logic (default by order if exists, then createdAt)
        if (Model.schema.paths.order) {
           query = query.sort({ order: 1, createdAt: -1 });
        } else {
           query = query.sort({ createdAt: -1 });
        }

        const documents = await query;
        res.status(200).json(documents);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    },

    getOne: async (req, res) => {
      try {
        const document = await Model.findById(req.params.id);
        if (!document) {
          return res.status(404).json({ message: 'Resource not found' });
        }
        res.status(200).json(document);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    },

    createOne: async (req, res) => {
      try {
        const document = await Model.create(req.body);
        res.status(201).json(document);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    },

    updateOne: async (req, res) => {
      try {
        const document = await Model.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!document) {
          return res.status(404).json({ message: 'Resource not found' });
        }
        res.status(200).json(document);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    },

    deleteOne: async (req, res) => {
      try {
        const document = await Model.findByIdAndDelete(req.params.id);

        if (!document) {
          return res.status(404).json({ message: 'Resource not found' });
        }
        res.status(200).json({ message: 'Resource deleted' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    },
  };
};

export default crudFactory;
